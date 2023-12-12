// FIREBASE CODE IS BELOW. Is this the right place to put it?

(function(){

  // Your web app's Firebase configuration
  var firebaseConfig = {
REMOVED FOR GITHUB BUT NEEDED FOR CODE TO WORK
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // get elements
  const email   = document.getElementById('email');
  const password   = document.getElementById('password');
  const login   = document.getElementById('login');  
  const signup   = document.getElementById('signup');
  const logout   = document.getElementById('logout');

  // login
  login.addEventListener('click', e => {
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
  });

  // signup
  signup.addEventListener('click', e => {
    // TODO: check for real email
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => console.log(e.message));
  });

  // logout
  logout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // login state
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      logout.style.display = 'inline';
      login.style.display = 'none';
      signup.style.display = 'none';
    }
    else{
      console.log('User is not logged in');
      logout.style.display = 'none';
      login.style.display = 'inline';
      signup.style.display = 'inline';
    }
  });

}());

