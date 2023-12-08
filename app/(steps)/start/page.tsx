'use client';

// imports
import { useContext, useEffect, useState } from 'react';
import { StepsContext } from '@/components/providers/steps-provider';
import StepBar from './_components/step-bar';
import BasicInfoCard from './_components/basic-info';
import FitGoal from './_components/fit-goal';
import MedicalCard from './_components/medical';
import SleepCard from './_components/sleep';
import Lifestyle from './_components/lifestyle';
import AvailabilityCard from './_components/availability';
import DietCard from './_components/diet';
import Loader from './_components/loader';
import Loading from './_components/loading';
import Lottie from 'lottie-react';
import doneAnimation from '@/public/animations/done.json';
import waveAnimation from '@/public/animations/wave.json';
import Program from './_components/program';
import { useRouter } from 'next/navigation';

export default function Start() {
  // variables
  const {
    step_num, loadComponent, steps_list, getAllAnswers,
  } = useContext(StepsContext);
  const [is_loading, setIsLoading] = useState<boolean>(false)

  // functions
  useEffect(() => {
    loadComponent('BasicInfoCard', BasicInfoCard);
    loadComponent('FitGoal', FitGoal);
    loadComponent('MedicalCard', MedicalCard);
    loadComponent('SleepCard', SleepCard);
    loadComponent('Lifestyle', Lifestyle);
    loadComponent('AvailabilityCard', AvailabilityCard);
    loadComponent('DietCard', DietCard);
  }, []);

  const generateProgram = async () => {
    try {
      setIsLoading(true)
      const response = await getAllAnswers()
    } catch (err) {
      console.log(err)
    }
  }

  const getStepComponent = () => {
    const {
      title,
      icon,
      description,
      id,
      component: Card,
    } = steps_list[step_num];
    if (Card) return <Card id={id} title={title} description={description} />;
    return <Loader />;
  };

  // returns
  return (
    <div className="w-full px-1 lg:w-3/4 2xl:w-2/4 mx-auto">
      <StepBar generateProgram={generateProgram} is_loading={is_loading} />
      {getStepComponent()}
    </div>
  );
}