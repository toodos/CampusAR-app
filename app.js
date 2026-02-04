// Supabase Configuration
const SUPABASE_URL = 'https://fwnwobsjbmwcdnmbyjpl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_FYBBjmO5lWZWlwYkDqO3IQ_cVdxXjed';

// Wait for Supabase to load
let supabase;

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Supabase
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    
    const form = document.getElementById('entryForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const loading = document.getElementById('loading');
    const errorMsg = document.getElementById('errorMsg');
    
    // Real-time validation
    document.getElementById('name').addEventListener('blur', function() {
        validateField('nameGroup', this.value.trim() !== '');
    });
    
    document.getElementById('phone').addEventListener('blur', function() {
        const valid = /^\d{10}$/.test(this.value.trim());
        validateField('phoneGroup', valid);
    });
    
    document.getElementById('purpose').addEventListener('change', function() {
        validateField('purposeGroup', this.value !== '');
    });
    
    function validateField(groupId, isValid) {
        const group = document.getElementById(groupId);
        if (isValid) {
            group.classList.remove('error');
        } else {
            group.classList.add('error');
        }
        return isValid;
    }
    
    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        errorMsg.textContent = '';
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const purpose = document.getElementById('purpose').value;
        const consent = document.getElementById('consent').checked;
        
        // Validate all
        const validName = validateField('nameGroup', name !== '');
        const validPhone = validateField('phoneGroup', /^\d{10}$/.test(phone));
        const validPurpose = validateField('purposeGroup', purpose !== '');
        
        if (!validName || !validPhone || !validPurpose) {
            errorMsg.textContent = 'Please fill all fields correctly';
            return;
        }
        
        if (!consent) {
            errorMsg.textContent = 'Please accept the consent';
            return;
        }
        
        // Show loading
        submitBtn.disabled = true;
        btnText.textContent = 'Registering...';
        loading.classList.remove('hidden');
        
        try {
            console.log('Submitting:', { name, phone, purpose });
            
            const { data, error } = await supabase
                .from('entries')
                .insert([{ name, phone, purpose }])
                .select();
            
            if (error) {
                console.error('Supabase error:', error);
                throw error;
            }
            
            console.log('Success:', data);
            
            // Redirect to AR
            window.location.href = 'campusAR.html';
            
        } catch (err) {
            console.error('Error:', err);
            loading.classList.add('hidden');
            submitBtn.disabled = false;
            btnText.textContent = 'Register & Enter Campus';
            errorMsg.textContent = 'Error: ' + (err.message || 'Failed to register. Try again.');
        }
    });
});