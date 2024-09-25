// tests/components/SearchBar.spec.ts

import { mount } from '@vue/test-utils';
import SearchBar from '@/components/SearchBar.vue'; // Adjust the path as necessary
import { describe, it, expect } from 'vitest';

describe('SearchBar Component', () => {
  it('renders the input field and button', () => {
    const wrapper = mount(SearchBar);
    
    // Check if the input field is rendered
    const input = wrapper.find('input[type="search"]');
    expect(input.exists()).toBe(true);

    // Check if the search button is rendered
    const button = wrapper.find('button[aria-label="search"]');
    expect(button.exists()).toBe(true);
  });

  it('emits "search" event with the input value when form is submitted', async () => {
    const wrapper = mount(SearchBar);
    
    const input = wrapper.find('input[type="search"]');
    
    // Set the input value
    await input.setValue('my keyword');
    
    // Trigger form submission
    await wrapper.trigger('submit');
    
    // Check if the search event was emitted with the correct value
    expect(wrapper.emitted('search')).toBeTruthy();
    expect(wrapper.emitted('search')![0]).toEqual(['my keyword']);
  });
});
