const SUPABASE_URL = 'https://fwnwobsjbmwcdnmbyjpl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_FYBBjmO5lWZWlwYkDqO3IQ_cVdxXjed';

let supabase;

document.addEventListener('DOMContentLoaded', function() {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    
    loadEntries();
    setupRealtime();
});

async function loadEntries() {
    const tableBody = document.getElementById('tableBody');
    const totalCount = document.getElementById('totalCount');
    
    try {
        tableBody.innerHTML = '<tr><td colspan="5" class="loading-cell">Loading...</td></tr>';
        
        const { data, error } = await supabase
            .from('entries')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        
        console.log('Loaded entries:', data);
        
        if (!data || data.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" class="empty-cell">No entries yet</td></tr>';
            totalCount.textContent = '0';
            return;
        }
        
        renderTable(data);
        
    } catch (err) {
        console.error('Error:', err);
        tableBody.innerHTML = '<tr><td colspan="5" class="empty-cell">Error loading data</td></tr>';
    }
}

function renderTable(entries) {
    const tableBody = document.getElementById('tableBody');
    const totalCount = document.getElementById('totalCount');
    
    totalCount.textContent = entries.length;
    
    const html = entries.map((entry, index) => {
        const date = new Date(entry.created_at);
        const timeStr = date.toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        });
        
        return `
            <tr>
                <td>${index + 1}</td>
                <td><strong>${escapeHtml(entry.name)}</strong></td>
                <td>${escapeHtml(entry.phone)}</td>
                <td>${escapeHtml(entry.purpose)}</td>
                <td>${timeStr}</td>
            </tr>
        `;
    }).join('');
    
    tableBody.innerHTML = html;
}

function setupRealtime() {
    supabase
        .channel('entries')
        .on('postgres_changes', 
            { event: '*', schema: 'public', table: 'entries' },
            (payload) => {
                console.log('Realtime update:', payload);
                loadEntries();
            }
        )
        .subscribe();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}