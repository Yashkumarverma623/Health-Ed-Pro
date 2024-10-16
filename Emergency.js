const stateSearchInput = document.getElementById('state-search');
const searchButton = document.getElementById('search-button');
const stateSpecificHelplinesSection = document.getElementById('state-specific-helplines');

const stateData = [
    { state: 'Andhra Pradesh', helpline: '104' },
    { state: 'Arunachal Pradesh', helpline: '104' },
    { state: 'Assam', helpline: '104' },
    { state: 'Bihar', helpline: '104' },
    { state: 'Chhattisgarh', helpline: '104' },
    { state: 'Goa', helpline: '104' },
    { state: 'Gujarat', helpline: '104' },
    { state: 'Haryana', helpline: '104' },
    { state: 'Himachal Pradesh', helpline: '104' },
    { state: 'Jammu and Kashmir', helpline: '104' },
    { state: 'Jharkhand', helpline: '104' },
    { state: 'Karnataka', helpline: '104' },
    { state: 'Kerala', helpline: '104' },
    { state: 'Madhya Pradesh', helpline: '104' },
    { state: 'Maharashtra', helpline: '104' },
    { state: 'Manipur', helpline: '104' },
    { state: 'Meghalaya', helpline: '104' },
    { state: 'Mizoram', helpline: '104' },
    { state: 'Nagaland', helpline: '104' },
    { state: 'Odisha', helpline: '104' },
    { state: 'Punjab', helpline: '104' },
    { state: 'Rajasthan', helpline: '104' },
    { state: 'Sikkim', helpline: '104' },
    { state: 'Tamil Nadu', helpline: '104' },
    { state: 'Telangana', helpline: '104' },
    { state: 'Tripura', helpline: '104' },
    { state: 'Uttarakhand', helpline: '104' },
    { state: 'Uttar Pradesh', helpline: '104' },
    { state: 'West Bengal', helpline: '104' },
    { state: 'Ladakh', helpline: '1-8008914416/ 14416' },
    { state: 'Chandigarh', helpline: '01722660078, 01722661078' },
    { state: 'Andaman and Nicobar Islands', helpline: '0413 2339999' },
    { state: 'Pondicherry', helpline: '221152, 18003453225' }
];

stateSearchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    const filteredHelplines = stateData.filter(state => state.state.toLowerCase().includes(searchTerm));

    stateSpecificHelplinesSection.innerHTML = ''; // Clear previous results

    filteredHelplines.forEach(state => {
        const listItem = document.createElement('li');
        listItem.textContent = `${state.state}: ${state.helpline}`;
        stateSpecificHelplinesSection.appendChild(listItem);
    });
});

searchButton.addEventListener('click', () => {
    const searchTerm = stateSearchInput.value.toLowerCase();
    // Perform the same filtering logic as in the input event listener
});

const emergencyButton = document.getElementById('emergency-button');

emergencyButton.addEventListener('click', () => {
    const emergencyNumber = '112'; // Replace with your desired emergency number
    window.location.href = `tel:${emergencyNumber}`;
});

// Geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Use latitude and longitude to display location-specific information or resources
        },
        (error) => {
            console.error('Error getting geolocation:', error);
        }
    );
}

// Dropdown menus
const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
    button.addEventListener('click', () => {
        const dropdownContent = button.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});