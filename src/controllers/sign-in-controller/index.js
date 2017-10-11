/**
 * Created by Monkey on 10/6/2017.
 */
const stateKey = 'spotify_auth_state';

export default class {
    constructor($location, $window) {
        this.location = $location;
        this.window = $window;
    }

    generateRandomString(length) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    signIn () {
        const client_id = 'a74d6946dbe848719690b3387488b215'; // Your client id
        const redirect_uri = 'http://localhost:8081'; // Your redirect uri
        const state = this.generateRandomString(16);
        localStorage.setItem(stateKey, state);
        const scope = 'user-read-private user-read-email';
        let url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);

        this.window.location = url;
    }
}