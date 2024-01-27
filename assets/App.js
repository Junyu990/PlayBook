// The object 'Contracts" will be injected here which contains the ABI, address of your deployed contract and endpoint 
// must include "constant": true,/false,

var Contracts = { SportsBetting:  {
    abi: [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "teamPlacing",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "time",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "wallet",
                    "type": "address"
                }
            ],
            "name": "BetPlaced",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "betId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "BetsReleased",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                }
            ],
            "name": "EventCreated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                }
            ],
            "name": "EventDeleted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                }
            ],
            "name": "EventUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "betId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "winner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "FundsReleased",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "userID",
                    "type": "uint256"
                }
            ],
            "name": "UserDeleted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "userID",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                }
            ],
            "name": "UserLoggedIn",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "userID",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "firstname",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "lastname",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "UserRegistered",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "betCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "betCountForEvent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "betsMap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "teamPlacing",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "time",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "wallet",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "contractOwner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_endTime",
                    "type": "uint256"
                }
            ],
            "name": "createEvent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                }
            ],
            "name": "deleteEvent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "userID",
                    "type": "uint256"
                }
            ],
            "name": "deleteUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "eventCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "eventsMap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_username",
                    "type": "string"
                }
            ],
            "name": "findUserIDByUsername",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "betId",
                    "type": "uint256"
                }
            ],
            "name": "getBet",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "teamPlacing",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "time",
                    "type": "string"
                },
                {
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                },
                {
                    "internalType": "address",
                    "name": "wallet",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBetCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                }
            ],
            "name": "getBetCountForEvent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                }
            ],
            "name": "getEvent",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "id",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isSettled",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getEventCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lastUserID",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_password",
                    "type": "string"
                }
            ],
            "name": "login",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_eventId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_teamPlacing",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_time",
                    "type": "string"
                }
            ],
            "name": "placeBet",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_firstname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_lastname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_password",
                    "type": "string"
                }
            ],
            "name": "registerUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "betId",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "winner",
                    "type": "address"
                }
            ],
            "name": "releaseFunds",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "eventId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_isSettled",
                    "type": "bool"
                }
            ],
            "name": "updateEvent",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "users",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "userID",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "firstname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "lastname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    address: "0x099316A0967C86CABF7CbBCffbDE48C9fc9752AB",
    endpoint: "https://sepolia.infura.io/v3/"
   }}

function BettingApp(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
    this.connectedAccount = null;
}

BettingApp.prototype.onReady = async function() {
    await this.init(function () {
        $('#message').append("DApp loaded successfully.");
    });
    this.bindButtons();
    // this.loadUsers();
    // this.getUserInfo();
    this.loadBets();
    checkLoggedIn();
    this.loadEvents(); // call the loadEvents func to display the Event list
}
BettingApp.prototype.connectMetaMask = async function() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            this.connectedAccount = accounts[0];
            console.log('Connected wallet:', this.connectedAccount);
            this.web3 = new Web3(window.ethereum);
            this.init();
        } catch (error) {
            console.error('Error connecting to MetaMask:', error.message);
        }
    } else {
        console.error('MetaMask not detected. Please install MetaMask.');
    }
}

BettingApp.prototype.init = async function() {
    try {
        this.web3 = new Web3(window.ethereum);
        const contractAddress = this.Contract.address;
        this.instance = new this.web3.eth.Contract(this.Contract.abi, contractAddress);
    } catch (error) {
        console.error('Error creating web3 instance:', error.message);
    }
};

if(typeof(Contracts) === "undefined") var Contracts={ SportsBetting: { abi: [] }};
var bettingApp = new BettingApp(Contracts['SportsBetting']);

$(document).ready(function() {
    bettingApp.onReady();
});


// Ensure to update contract calls with the correct context and error handling
BettingApp.prototype.getEventCount = function (cb) {
    this.instance.methods.eventCount().call()
        .then(eventCount => cb(null, eventCount))
        .catch(error => cb(error, null));
};

// Calls the getEvent function in the smart contract
BettingApp.prototype.getEvent = function(eventId, cb) {
    this.instance.methods.getEvent(eventId).call()
        .then(result => {
            // Extract individual properties from the result
            const id = result[0];
            const name = result[1];
            const startTime = result[2];
            const endTime = result[3];
            const isSettled = result[4];

            // Create an object with the extracted properties
            const eventDetails = {
                id: id,
                name: name,
                startTime: startTime,
                endTime: endTime,
                isSettled: isSettled
            };

            // Call the callback with the event details
            cb(null, eventDetails);
        })
        .catch(error => {
            console.error('Error calling getEvent:', error);
            cb(error, null);
        });
};

BettingApp.prototype.loadEvents = function() {
    var that = this;
    this.getEventCount(function(error, eventCount) {
        if (error) {
            console.error('Error getting event count:', error);
            return;
        }    

        $("#message").text(`Event Count: ${eventCount}`);
        $("#eventsTableBody").empty(); // Empty the events table body

        // Iterate over each event and load it into the table
        for (var i = 1; i <= eventCount; i++) {
            (function(index) {
                that.getEvent(index, function(err, eventDetails) {
                    if (err) {
                        console.error(err);
                    }

                    var eventid = eventDetails.id;
                    var name = eventDetails.name;
                    var startTime = eventDetails.startTime;
                    var endTime = eventDetails.endTime;
                    var settled = eventDetails.isSettled;

                    // Asynchronously fetch the bet count for the event
                    that.getBetCountForEvent(eventid, function(err, betCount) {
                        if (err) {
                            console.error(err);
                            return;
                        }

                        var row =`
                            <tr>
                                <td>${eventid}</td>
                                <td>${name}</td>
                                <td>${startTime}</td>
                                <td>${endTime}</td>
                                <td>${settled ? 'Yes' : 'No'}</td>
                                <td>${betCount}</td>
                                <td>
                                    <button id='button-displayinfo' data-eventid='${eventid}' type="button" class="btn btn-primary see-info-button" data-bs-toggle="modal" data-bs-target="#eventInfoModal">
                                        Select
                                    </button>
                                </td>
                            </tr>
                        `;

                        $("#eventsTableBody").append(row);
                    });
                });
            })(i);
        }
    });
}

BettingApp.prototype.bindButtons = function(){
    var that = this;

    $(document).on("click", "#button-createEvent", function(){
        that.createEvent(); //call the registerNewHouse function when the button-register is clicked
    });

    $(document).on("click", "#button-placeBet", function(){
        that.placeBet(); //call the placeBet function when the button-placeBet is clicked
    });

    $(document).on("click", "#button-displayinfo", function(){
        var eventId = $(this).data('eventid');
        that.seeinfo(eventId);
    });

    $(document).on("click", "#button-updateEvent", function(){
        that.updateEvent();
    });

    $(document).on("click", "#button-deleteEvent", function(){
        that.deleteEvent();
    });

    $(document).on("click", "#button-signup", function(){
        that.registerUser(); 
    });

    $(document).on("click", "#button-login", function(){
        that.loginUser(); 
    });

    $(document).on("click", "#button-deleteevent", function(){
        that.deleteEvent(); 
    });

    $(document).on("click", "#button-releasefunds", function(){
        var betId = $('#betId').val();
        var recipient = $('#wallet').val(); // Get recipient wallet address
        that.releaseFunds(betId, recipient); 
    });

    $(document).on("click", "#button-displaybets", function(){
        var betId = $(this).data('betid');
        that.displaybets(betId); 
    });

}

//Function to retrieve information of the event chosen
BettingApp.prototype.seeinfo = function(eventId) {
    var that = this;
    this.getEvent(eventId, function(err, eventDetails) {
        if (err) {
            console.error(err);
            return;
        }

        // Extract information from eventDetails
        var id = eventDetails.id;
        var name = eventDetails.name;
        var startTime = eventDetails.startTime;
        var endTime = eventDetails.endTime;
        var settled = eventDetails.isSettled;

        $("#eventId").val(id);
        $("#eventName").val(name);
        $("#eventStart").val(startTime);
        $("#eventEnd").val(endTime);

        $("#CreateBetTitle").html(`<h2>Create Bet for ${name} at ${startTime} to ${endTime}</h2>`);
        $("#CreateInputSection").html(`
            <div class="input-group">
                <label>Enter your selection:</label>
                <input type="text" id="teamPlacing" placeholder="Enter your selection..."></input>
            </div>
            <div class="input-group">
                <label>Enter your bet amount:</label>
                <input type="number" id="amount" placeholder="Enter your bet..."></input>
            </div>
            <button id="button-placeBet">Place Bet!</button>
            <span id="beterrormessage" style="color:red;"></span>
        `);
    });
};

BettingApp.prototype.createEvent = function() {
    var name = $("#newEventName").val();
    var startTime = $("#StartTime").val();
    var endTime = $("#EndTime").val();
    var that = this;  // Preserve the context of 'this' for use in callbacks
    $("#message").text("Creating new event: " + name + " from " + startTime + " to " + endTime);
  
    // Get the current Ethereum account
    this.web3.eth.getAccounts().then(accounts => {
      const account = accounts[0];
  
      // Call the createEvent function on your smart contract
      that.instance.methods.createEvent(name, startTime, endTime)
        .send({ from: account })
        .then(result => {
          console.log('Event created:', result);
          // Handle success, e.g., update UI or trigger other actions
            $("#newEventName").val("");
            $("#StartTime").val("");
            $("#EndTime").val("");
            that.loadEvents();
        })
        .catch(error => {
          console.error('Error creating event:', error);
          $("#message").text("Event Creation Failed");
          // Handle error, e.g., display an error message to the user
        });
    });
};

//Calls the houseCount function in the smart contract
BettingApp.prototype.getBetCount = function (cb) {
    this.instance.methods.betCount().call()
        .then(betCount => cb(null, betCount))
        .catch(error => cb(error, null));
};

// Calls the getBetCountForEvent function in the smart contract
BettingApp.prototype.getBetCountForEvent = function(eventId, cb) {
    this.instance.methods.getBetCountForEvent(eventId).call()
        .then(betCount => {
            cb(null, betCount);
        })
        .catch(error => {
            console.error('Error calling getBetCountForEvent:', error);
            cb(error, null);
        });
};

// Function to get details of a specific bet
BettingApp.prototype.getBet = function(betId, callback) {
    var that = this;

    // Ensure betId is valid
    if (!betId) {
        console.error('Invalid bet ID:', betId);
        callback('Invalid bet ID', null);
        return;
    }

    // Call the smart contract function to get the bet details
    this.instance.methods.getBet(betId).call(function(error, result) {
        if (error) {
            console.error('Error getting bet details:', error);
            callback(error, null);
        } else {
            // Extract bet details from the result
            var eventId = result[0];
            var teamPlacing = result[1];
            var amount = result[2];
            var time = result[3];
            var isSettled = result[4];
            var wallet = result[5];
            
            // Construct the bet object
            var bet = {
                eventId: eventId,
                teamPlacing: teamPlacing,
                amount: amount,
                time: time,
                isSettled: isSettled,
                wallet: wallet
            };

            // Call the callback function with the bet details
            callback(null, bet);
        }
    });
}
// Function to load bets into the HTML table
BettingApp.prototype.loadBets = function() {
    var that = this;
    this.getBetCount(function(error, betCount) {
        if (error) {
            console.error('Error getting bet count:', error);
            return;
        }    

        $("#betmessage").text(`Bet Count: ${betCount}`);
        $("#betsTableBody").empty(); // Empty the bets table body

        // Iterate over each bet and load it into the table
        for (var i = 1; i <= betCount; i++) {
            (function(index) {
                that.getBet(index, function(err, betDetails) {
                    if (err) {
                        console.error(err);
                    }

                    var betId = index;
                    var eventId = betDetails.eventId;
                    var teamPlacing = betDetails.teamPlacing;

                    var amount = betDetails.amount

                    var time = betDetails.time;
                    var wallet = betDetails.wallet;

                    var row =`
                        <tr>
                            <td>${betId}</td>
                            <td>${eventId}</td>
                            <td>${teamPlacing}</td>
                            <td>${amount}</td>
                            <td>${wallet}</td>
                            <td>
                                <button id='button-displaybets' data-betid='${betId}' type="button" class="btn btn-primary release-funds-button">
                                    Release Funds
                                </button>
                            </td>
                        </tr>
                    `;

                    $("#betsTableBody").append(row);
                });
            })(i);
        }
    });
}

// Prototype method to display bet details
BettingApp.prototype.displaybets = function(betId) {
    var that = this;
    this.getBet(betId, function(err, betDetails) {
        if (err) {
            console.error(err);
            return;
        }
        
        // Extract bet details from the result
        var eventId = betDetails.eventId;
        var teamPlacing = betDetails.teamPlacing;
        var amount = betDetails.amount;
        var time = betDetails.time;
        var isSettled = betDetails.isSettled;
        var wallet = betDetails.wallet;
        
        // Update the input boxes with the bet details
        $('#betId').val(betId);
        $('#eventId').val(eventId);
        $('#teamPlacing').val(teamPlacing);
        $('#amount').val(amount);
        $('#wallet').val(wallet);
    });
}

// Function to release funds to the winner or to another wallet by the contract owner
BettingApp.prototype.releaseFunds = function(betId, recipient) {
    // Check if betId is null or undefined
    if (!betId) {
        $("#releaseerror").text("Invalid bet ID. Please select one!");
        return; // Exit the function early if betId is invalid
    }

    var that = this;
    var contractOwner;

    // Get the contract owner asynchronously
    this.instance.methods.contractOwner().call()
        .then(function(owner) {
            contractOwner = owner;

            // Call the releaseFunds function on your smart contract
            that.instance.methods.releaseFunds(betId, recipient)
                .send({ from: contractOwner })
                .then(function(receipt) {
                    if (receipt.status) {
                        console.log('Funds released:', receipt);
                        // Reload bets and clear input values
                        that.loadBets();
                        $("#betId").val("");
                        $("#eventId").val("");
                        $("#teamPlacing").val("");
                        $("#amount").val("");
                        $("#wallet").val("");
                        $("#releaseerror").text(""); // Clear any previous error messages
                    } else {
                        $("#betmessage").text("Failed to release funds.");
                    }
                })
                .catch(function(error) {
                    console.error('Error releasing funds:', error);
                });
        })
        .catch(function(error) {
            console.error('Error getting contract owner:', error);
        });
};

// Function to place a new bet
BettingApp.prototype.placeBet = function(buttonid) {
    var that = this;
    var eventId = $("#eventId").val();
    var teamPlacing = $("#teamPlacing").val();
    var amountInEther = $("#amount").val(); // Assuming this is the amount in Ether
    var time = $("#datetime").val();
    $("#message").text("Placing Bet for: " + eventId + " for " + teamPlacing + " with bet amount of " + amountInEther);

    if (!eventId || !teamPlacing || !amountInEther) {
        $("#beterrormessage").text("Please fill up all fields");
        console.error('Please provide valid values for Event ID, Team Placing, Amount.');
        return;
    } else {
        // Convert the amount to Wei
        var amountInWei = this.web3.utils.toWei(amountInEther, 'ether');

        // Get the current Ethereum account asynchronously
        this.web3.eth.getAccounts().then(accounts => {
            const account = accounts[0];

            // Call the placeBet function on your smart contract
            that.instance.methods.placeBet(eventId, teamPlacing, time)
                .send({ from: account, value: amountInWei }) // Send the value in Wei
                .then(receipt => {
                    if (receipt.status) {
                        console.log('Bet placed:', receipt);
                        $("#eventId").val("");
                        $("#teamPlacing").val("");
                        $("#amount").val("");
                        $("#eventName").val("");
                        $("#eventStart").val("");
                        $("#eventEnd").val("");
                        that.loadEvents();
                    } else {
                        $("#message").text("Bet Creation Failed");
                    }
                })
                .catch(error => {
                    console.error('Error placing bet:', error);
                });
        });
    }
};

function openTab(evt, tabName){
    // Declare all varibles
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for(i= 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList += "active";
}

BettingApp.prototype.updateEvent = function() {
    var eventId = $("#eventId").val();
    var eventName = $("#eventName").val();
    var eventStart = $("#eventStart").val();
    var eventEnd = $("#eventEnd").val();
    $("#message").text("Updating event: ID: " + eventId + " Name: " + eventName + " from " + eventStart + " to " + eventEnd);
    
    if (!eventId || !eventName || !eventStart || !eventEnd) {
        // Validate input fields
        console.error('Please provide valid values for Event ID, Name, Start Time, and End Time.');
        $("#updateerror").text("Please provide valid values for Event ID, Name, Start Time, and End Time.");
        return;
    }
    var isSettled = false;

    var that = this;
    // Get the current Ethereum account
    this.web3.eth.getAccounts().then(accounts => {
        const account = accounts[0];
        // Call the updateEvent function on your smart contract
        that.instance.methods.updateEvent(eventId, eventName, eventStart, eventEnd, isSettled)
            .send({ from: account })
            .then(result => {
                console.log('Event updated:', result);
                // Handle success, e.g., update UI or trigger other actions
                $("#eventId").val(""); // Clear input fields
                $("#eventName").val("");
                $("#eventStart").val("");
                $("#eventEnd").val("");
                that.loadEvents(); // Reload events after updating
            })
            .catch(error => {
                console.error('Error updating event:', error);
                $("#message").text("Update Failed");
                // Handle error, e.g., display an error message to the user
            });
    });
}

BettingApp.prototype.deleteEvent = function() {
    var that = this;
    // Get the eventId from the HTML form
    var eventId = $("#eventId").val();
    $("#message").text("Deleting event: ID: " + eventId);
    
    // Check if eventId is empty
    if (!eventId) {
        $("#deleteerror").text("Please select an event to delete.");
        return; // Exit the function
    }

    // Get the current Ethereum account
    this.web3.eth.getAccounts().then(accounts => {
        const account = accounts[0];
        // Call the deleteEvent function on your smart contract
        that.instance.methods.deleteEvent(eventId)
            .send({ from: account })
            .then(result => {
                console.log('Event deleted:', result);
                // Handle success, e.g., update UI or trigger other actions
                that.loadEvents(); // Reload events after deleting
                
                // Clear all form values using jQuery
                $("#eventId").val("");
                $("#eventName").val("");
                $("#eventStart").val("");
                $("#eventEnd").val("");
            })
            .catch(error => {
                console.error('Error deleting event:', error);
                $("#message").text("Delete Failed");
                // Handle error, e.g., display an error message to the user
            });
    });
};


// Register a new user
BettingApp.prototype.registerUser = function() {
    var that = this;
    var username = $("#username").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var email = $("#emailaddress").val();
    var password = $("#password").val(); // Get the password from the input field

    $("#registermessage").text("Registering user: " + username);

    if (!username || !firstname || !lastname || !email || !password) {
        $("#registererrormessage").text("Please fill up all fields");
        console.error('Please provide valid values for Username, First Name, Last Name, Email, and Password.');
        return;
    } else {
        // Get the current Ethereum account asynchronously
        this.web3.eth.getAccounts().then(accounts => {
            const account = accounts[0];

            // Call the registerUser function on your smart contract
            that.instance.methods.registerUser(username, firstname, lastname, email, password)
                .send({ from: account })
                .then(receipt => {
                    if (receipt.status) {
                        console.log('User registered:', receipt);
                        $("#username").val("");
                        $("#firstname").val("");
                        $("#lastname").val("");
                        $("#emailaddress").val("");
                        $("#password").val(""); // Clear the password field after registration
                        // Redirect to index.html after successful registration
                        window.location.href = "index.html";
                    } else {
                        $("#errormessage").text("User Registration Failed");
                    }
                })
                .catch(error => {
                    console.error('Error registering user:', error);
                });
        });
    }
};

// Log in an existing user
BettingApp.prototype.loginUser = function() {
    var that = this;
    var username = $("#username").val();
    var password = $("#password").val(); // Get the password from the input field

    $("#loginmessage").text("Logging in user: " + username);

    if (!username || !password) {
        $("#loginerrormessage").text("Please provide both username and password");
        console.error('Please provide both username and password.');
        return;
    } else {
        // Get the current Ethereum account asynchronously
        this.web3.eth.getAccounts().then(accounts => {
            const account = accounts[0];

            // Call the login function on your smart contract
            that.instance.methods.login(username, password)
                .send({ from: account })
                .then(receipt => {
                    if (receipt.status) {
                        console.log('User logged in:', receipt);
                        
                        // Retrieve user ID using findUserIDByUsername function
                        that.instance.methods.findUserIDByUsername(username)
                            .call({ from: account })
                            .then(userId => {
                                // Store user ID in session storage
                                sessionStorage.setItem("userId", userId);
                                sessionStorage.setItem("username", username);

                                // Redirect to index.html after successful login
                                window.location.href = "index.html";
                            })
                            .catch(error => {
                                console.error('Error retrieving user ID:', error);
                            });
                    } else {
                        $("#loginerrormessage").text("Login failed: " + receipt.errorMessage);
                    }
                })
                .catch(error => {
                    console.error('Error logging in user:', error);
                });
        });
    }
};

// Function to find the user ID by username
BettingApp.prototype.findUserIDByUsername = function(username, callback) {
    var that = this;
    that.instance.methods.findUserIDByUsername(username)
        .call()
        .then(function(userID) {
            callback(null, userID);
        })
        .catch(function(error) {
            callback(error, null);
        });
};


// Function to check if a user is logged in
function checkLoggedIn() {
    var userID = sessionStorage.getItem('userId');
    console.log('Logged in to: '+ sessionStorage.getItem('userId') + " " +sessionStorage.getItem('username'))
    if (userID > 0) {
        // User is logged in
        var username = sessionStorage.getItem('username');
        if (username) {
            // Display welcome message with username and logout button
            document.getElementById('welcomeMessage').textContent = 'Welcome, ' + username;
            document.getElementById('logoutButton').style.display = 'inline-block';
            document.getElementById('signUpButton').style.display = 'none';
            document.getElementById('loginButton').style.display = 'none';
        }
    } else {
        // User is not logged in
        document.getElementById('logoutButton').style.display = 'none';
        // Show sign up and login buttons
        document.getElementById('signUpButton').style.display = 'inline-block';
        document.getElementById('loginButton').style.display = 'inline-block';
    }
}

// Function to logout
function logout() {
    // Clear all data from session storage
    sessionStorage.clear();

    // Redirect to login page
    window.location.href = '../Web/login.html';
}

// Call checkLoggedIn function when the page loads
window.onload = function() {
    checkLoggedIn();
};

// Function to retrieve user information
BettingApp.prototype.getUserInfo = function(userID) {
    var that = this;

    // Call the getUserInfo function on the smart contract
    this.instance.methods.users(userID)
        .call()
        .then(user => {
            console.log('User info:', user);
            // Handle user information as needed
        })
        .catch(error => {
            console.error('Error getting user info:', error);
        });
};

// Function to get the total number of users
BettingApp.prototype.getUsersCount = function() {
    // Call the getUsersCount function on the smart contract
    return this.instance.methods.getUsersCount().call();
};

// Function to load all users from the smart contract
BettingApp.prototype.loadUsers = function() {
    var that = this;
    // Call the users function on the smart contract to get the total user count
    this.instance.methods.getUsersCount().call()
        .then(count => {
            // Loop through each user ID and retrieve user details
            for (let i = 1; i <= count; i++) {
                // Call the getUser function on the smart contract for each user ID
                this.instance.methods.getUser(i).call()
                    .then(user => {
                        console.log('User details:', user);
                        // Handle user details, e.g., update UI or store in an array
                    })
                    .catch(error => {
                        console.error('Error getting user details:', error);
                        // Handle error, e.g., display an error message to the user
                    });
            }
        })
        .catch(error => {
            console.error('Error getting total user count:', error);
            // Handle error, e.g., display an error message to the user
        });
};

document.addEventListener("DOMContentLoaded", function() {
    // Check if user ID and username exist in the session
    var userId = sessionStorage.getItem("userID");
    var username = sessionStorage.getItem("username");

    // If either user ID or username is missing, hide elements with id "listowneronly"
    if (username != 'Owner') {
        var listOwnerOnlyElements = document.querySelectorAll("#listowneronly");
        listOwnerOnlyElements.forEach(function(element) {
            element.style.display = "none";
        });
    }

    if (username != 'Owner') {
        var ownerOnlyElements = document.querySelectorAll(".owneronly");
        ownerOnlyElements.forEach(function(element) {
            element.style.display = "none";
        });
    }
});
