import React, {useState} from 'react';
import useHookie from "../src";
import { shallow } from 'enzyme';

describe("useHookie()", () => {
    it("should work", () => {
        const App: React.FC = () => {
            const initial_state = {
                what: 1,
            };

            const actual = useHookie(initial_state, useState);

            expect(actual).toEqual({
                what: {
                    _: 2
                }
            })

            return (
                <div>

                </div>
            )
        };

        const wrapper = shallow(<App/>);

        expect(wrapper).toMatchSnapshot();
    })
})
