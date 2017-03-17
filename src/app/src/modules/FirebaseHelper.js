import * as firebase from 'firebase';

class FirebaseHelper {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyB56KL7jx8lpQHyf7Zf2lYE2_wi_k2tZvE",
            authDomain: "github-pages-3bbdc.firebaseapp.com",
            databaseURL: "https://github-pages-3bbdc.firebaseio.com",
            storageBucket: "github-pages-3bbdc.appspot.com",
            messagingSenderId: "1013930359888"
        };
        firebase.initializeApp(firebaseConfig);

    }

    insertRecord(record, ref) {
        firebase.database().ref(ref).set(record);
    }

    getRecords(ref) {
        var recordsRef = firebase.database().ref(ref);
        return recordsRef;
    }
}
const firebaseHelper = new FirebaseHelper();
export default firebaseHelper;
