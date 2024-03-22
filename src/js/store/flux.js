const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts:[
				{

				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			
			getAllContacts: () =>{
				fetch ('https://playground.4geeks.com/apis/fake/contact/agenda/{DavidPadilla}', {
					method: "GET",
				})
				.then((response)=> {
		
					return response.json()
				})
				.then((data)=>{
					console.log(data);})
				.catch((error)=>{
					console.log(error)}
				)
			},

			createContact: (fullName,email,phone,address) =>{
				// console.log(fullName,email,address,phone);
			
				fetch ('https://playground.4geeks.com/apis/fake/contact/', {
					method: "POST",
					body: JSON.stringify([				
						{
						"full_name": fullName,
						"email": email,
						"agenda_slug": "DavidPadilla",
						"address":address,
						"phone":phone
					}]),
					headers: {
						"content-type": "application/json"
					}
				})
				.then((response)=>{
					response.json()})
				.then((data)=>{
					console.log(data);})
				.catch((error)=>{
					console.log(error)}
				)
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
