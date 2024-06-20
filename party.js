// Data for initial party list
const parties = [
    {
      id: 1,
      name: "Event Name 1",
      description: "This is a description of the event 1.",
      date: "2021-09-30T00:00:00.000Z",
      location: "123 Street 1"
    },
    {
      id: 2,
      name: "Event Name 2",
      description: "This is a description of the event 2.",
      date: "2021-10-15T00:00:00.000Z",
      location: "456 Avenue"
    }
  ];
  
  // Function to display the party list on the page
  function renderPartyList() {
    const partyListDiv = document.getElementById("partyList");
    
    partyListDiv.innerHTML = ""; // Clear previous list
    
    parties.forEach(party => {
      const partyDiv = document.createElement("div");
      partyDiv.innerHTML = `
        <p><strong>Name:</strong> ${party.name}</p>
        <p><strong>Date:</strong> ${new Date(party.date).toLocaleString()}</p>
        <p><strong>Location:</strong> ${party.location}</p>
        <p><strong>Description:</strong> ${party.description}</p>
        <button onclick="deleteParty(${party.id})">Delete</button>
      `;
      partyListDiv.appendChild(partyDiv);
    });
  }
  
  // Function to add a new party to the list
  function addParty(name, date, location, description) {
    const newParty = {
      id: parties.length + 1,
      name,
      date,
      location,
      description
    };
  
    parties.push(newParty);
    
    renderPartyList();
  }
  
  // Function to delete a party from the list
  function deleteParty(partyId) {
    const index = parties.findIndex(party => party.id === partyId);
    
    if (index !== -1) {
      parties.splice(index, 1);
      renderPartyList();
    }
  }
  
  // Event listener for form submission
  document.getElementById("partyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
  
    addParty(name, date, location, description);
  });
    
  // Display the initial list of parties on the page
  renderPartyList();
  