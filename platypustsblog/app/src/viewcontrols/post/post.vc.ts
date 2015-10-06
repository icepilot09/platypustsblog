import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class newpostControl extends BaseViewControl {
    templateString: string = require('./post.vc.html');

    context: any = {};
}

register.viewControl('post-vc', newpostControl);