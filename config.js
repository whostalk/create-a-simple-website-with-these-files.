
// COUNTER CONFIG OBJECT
// ---------------------

	var counter = {

		// SET MONTH
		// ---------
		// SET MONTH : STRING[option]
		//
		// OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"

		setMonth: 'December',



		// SET DAY
		// -------
		// SET DAY : INTEGER[ 1 - 31 ]

		setDay: 31,



		// SET YEAR
		// --------
		// SET YEAR : INTEGER

		setYear: 2018
	}



// CAROUSEL CONFIG OBJECT
// ----------------------

	var carousel = {

		// THE AMOUNT OF TIME TO DELAY BETWEEN AUTOMATICALLY CYCLING AN ITEM. IF FALSE, CAROUSEL WILL NOT AUTOMATICALLY CYCLE
		// -------------------------------
		// INTERVAL : INTEGER [ 0 - 2147483647 ] | BOOLEAN[ false ]
		interval: 3000,



		// WHETHER THE CAROUSEL SHOULD REACT TO KEYBOARD EVENTS
		// ----------------------------------------------------
		// KEYBOARD : BOOLEAN [ true | false ]

		keyboard: false,



		// IF SET TO "HOVER", PAUSES THE CYCLING OF THE CAROUSEL ON MOUSEENTER AND RESUMES THE CYCLING OF THE CAROUSEL ON MOUSELEAVE
		// IF SET TO NULL, HOVERING OVER THE CAROUSEL WON'T PAUSE IT.
		// -------------------------------------------------------------------------------------------------------------------------
		// PAUSE : STRING[ 'hover'] | null

		pause: null,



		// AUTOPLAYS THE CAROUSEL AFTER THE USER MANUALLY CYCLES THE FIRST ITEM. IF "CAROUSEL", AUTOPLAYS THE CAROUSEL ON LOAD
		// --------------------------------------------------------------------------------------------------------------------
		// RIDE : STRING[ 'carousel' ] | BOOLEAN[ false ]

		ride: false,



		// WHETHER THE CAROUSEL SHOULD CYCLE CONTINUOUSLY OR HAVE HARD STOPS
		// -----------------------------------------------------------------
		// WRAP : BOOLEAN [ true | false ]

		wrap: true

	}



// SUBSCRIBE CONFIG OBJECT
// ----------------------

	var subscribe = {

		// MAILCHIMP API KEY WHICH WILL BE USED TO CONNECT YOUR SUBSCRIBE FORM AND MAILCHIM ACCOUNT
		// ----------------------------------------------------------------------------------------
		// EMAIL : STRING

		apiKey: '07f194f089052200fe4bf9a2b1a3a104-us15',



		// MAILCHIMP LIST ID WHICH WILL BE USED TO INSERT NEW USER TO YOUR SUBSCRIBE LIST
		// -------------------------------------------------------------------------------
		// EMAIL : STRING

		listID: '9967cf16a5',



		// RESPONSE MESSAGE IF EMAIL IS VALID AND SENT TO YOUR SYSTEM
		// ----------------------------------------------------------
		// MESSAGE : STRING

		successMsg: '*Thanks for your interest!',



		// RESPONSE MESSAGE IF EMAIL IS NOT VALID 
		// --------------------------------------
		// MESSAGE : STRING

		errorMsg: '*This email is invalid!'

	}
