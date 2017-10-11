/**
 * Created by Monkey on 10/6/2017.
 */

// TODO: move into a constant and inject it
const stateKey = 'spotify_auth_state';

export default class {
    constructor($location, $http) {

        const url = $location.url();
        let params = this.getHashParams(url);

        let access_token = params.access_token,
            state = params.state,
            storedState = localStorage.getItem(stateKey);

        if (access_token && (state == null || state !== storedState)) {
            alert('There was an error during the authentication');
        } else {
            localStorage.removeItem(stateKey);

            if (access_token) {
                localStorage.setItem('auth-token', access_token);

                $http({
                    method: 'GET',
                    url: 'https://api.spotify.com/v1/me'
                }).then( (res) => {
                    // TODO: navigate to dashboard
                    console.log('result of me', res);
                }, (err) => {
                    console.log('error', err);
                } );
            }
        }
    }


    getHashParams() {
        let hashParams = {};
        let e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
}
