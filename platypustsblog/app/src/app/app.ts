import {App, events, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import newpostControl from '../viewcontrols/post/post.vc';

export default class MyApp extends App {
    constructor(router: routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: 'newpost', view: newpostControl }
        ]);
    }

    error(ev: events.ErrorEvent<Error>): void {
        console.log(ev.error);
    }
}

register.app('app', MyApp, [
    routing.Router
]);
