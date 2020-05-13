import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

import { addCoffees } from '../../actions/coffeesActions';
import { addSnacks } from '../actions/snacksActions';
import { addNaps } from '../actions/napsActions';
import { addStudies } from '../actions/studiesActions';

import { getEducated } from '../selectors/studiesSelectors';
import { getHyper } from '../selectors/coffeesSelectors';
import { getTired } from '../selectors/napsSelectors';
import { getHungry } from '../selectors/snacksSelectors';

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

const Moods = () => {
  const dispatch = useDispatch();

  // state = {
  //   coffees: 0,
  //   snacks: 0,
  //   naps: 0,
  //   studies: 0
  // }

  //selectors
  const coffees = useSelector(getHyper);
  const snacks = useSelector(getHungry);
  const naps = useSelector(state => getTired(state, naps));
  const studies = useSelector(getEducated);


  //reducer
  const handleSelection = action => {
    switch(action.type) {
      case 'DRINK_COFFEE':
        dispatch(addCoffees(coffees));
        // this.setState(state => ({ coffees: state.coffees + 1 }));
        break;
      case 'EAT_SNACK':
        dispatch(addSnacks(snacks));
        // this.setState(state => ({ snacks: state.snacks + 1 }));
        break;
      case 'TAKE_NAP':
        dispatch(addNaps(naps));
        // this.setState(state => ({ naps: state.naps + 1 }));
        break;
      case 'STUDY':
        dispatch(addStudies(studies));
        // this.setState(state => ({ studies: state.studies + 1 }));
        break;
      default:
        console.log(`unhandled type: ${action.type}`);
    }
  };


  // render() {
  // const { coffees, snacks, naps, studies } = this.state;
  const face = getFace();

  return (
    <>
      <Controls>
        <button onClick={() => handleSelection({ type: 'DRINK_COFFEE' })}>coffee - {coffees}</button>
        <button onClick={() => handleSelection({ type: 'EAT_SNACK' })}>snacks - {snacks}</button>
        <button onClick={() => handleSelection({ type: 'TAKE_NAP' })}>naps - {naps}</button>
        <button onClick={() => handleSelection({ type: 'STUDY' })}>studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};
export default Moods;
