import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled();
});



// test('should render Header correctly', () => {
//     const startLogout = jest.fn();
//     const wrapper = shallow(<Header startLogout={startLogout}/>);
//     expect(wrapper).toMatchSnapshot();
//     expect(wrapper).toMatchSnapshot();
// });

// test('should render error for invalid form submission', () => {
//     const wrapper = shallow(<ExpenseForm />);
//     expect(wrapper).toMatchSnapshot();
//     wrapper.find('form').simulate('submit', {
//         preventDefault: () => {}
//     });
//     expect(wrapper.state('error').length).toBeGreaterThan(0);
//     expect(wrapper).toMatchSnapshot();
// })
