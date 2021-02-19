import { shallowMount } from '@vue/test-utils';
import ToggleButton from '../ToggleButton';

describe('ToggleButton', () => {
    it('should mount successfull', () => {
        const wrapper = shallowMount(ToggleButton, {
            propsData: {
                value: true
            }
        });

        // Sanity check...
        expect(wrapper.vm).toBeTruthy();
    })
})
