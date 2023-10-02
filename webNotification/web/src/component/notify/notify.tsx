import React from 'react';
export class Notify extends React.Component {
    render() {
        const publicKey = 'BOnNUoPIf3z2uvcY6aXrS0mmH_FfslcjdETmOYYWYgW-ldgPIJyQdMgpQ0Q5L6mcYNqbO68ImPEJhnhv1EyFgvM';

        function subscribe() {
            alert('Subscribe To Notifications');
        }

        async function registerServiceWorker() {
            const register = await navigator.serviceWorker.register('./worker.js', {
                scope: '/'
            });
        
            const subscription = await register.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicKey,
            });
        
            await fetch("/subscribe", {
                method: "POST",
                body: JSON.stringify(subscription),
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }

        return (
            <div>
                <button type="button" onClick={registerServiceWorker}>Click Me</button>
            </div>
        );
    }
}