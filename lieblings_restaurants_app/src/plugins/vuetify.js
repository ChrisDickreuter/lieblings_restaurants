import Vue from 'vue';
import Vuetify, {colors} from 'vuetify/lib';

import 'vuetify/lib/util/colors';
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red.darken1,
            }
        }
    },
    icons: {
        iconfont: 'fa4',
    },
});
