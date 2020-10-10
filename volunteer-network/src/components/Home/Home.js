import React from 'react';
import Task from '../Task/Task';

const tasks = [
    {
        name: 'Animal Shelter',
        pic: 'animalShelter.png'
    },
    {
        name: 'Baby Sit',
        pic: 'babySit.png'
    },
    {
        name: 'Bard House',
        pic: 'birdHouse.png'
    },
    {
        name: 'Child Support',
        pic: 'childSupport.png'
    },
    {
        name: 'Clean Water',
        pic: 'cleanWater.png'
    },
    {
        name: 'Clean Park',
        pic: 'clearnPark.png'
    },
    {
        name: 'Cloth Swap',
        pic: 'clothSwap.png'
    },
    {
        name: 'Drive Safety',
        pic: 'driveSafety.png'
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png'
    },
    {
        name: 'Good Education',
        pic: 'goodEducation.png'
    },
    {
        name: 'IT Help',
        pic: 'ITHelp.png'
    },
    {
        name: 'Library Books',
        pic: 'libraryBooks.png'
    },
    {
        name: 'Music Lessons',
        pic: 'musicLessons.png'
    },
    {
        name: 'New Book',
        pic: 'newBooks.png'
    },
    {
        name: 'Refuse Shelter',
        pic: 'refuseShelter.png'
    },
    {
        name: 'River Clean',
        pic: 'riverClean.png'
    },
    {
        name: 'School Suffiles',
        pic: 'schoolSuffiles.png'
    },
    {
        name: 'Study Group',
        pic: 'studyGroup.png'
    },
    {
        name: 'Stuffed Animal',
        pic: 'stuffedAnimals.png'
    },
    {
        name: 'Vote Register',
        pic: 'voteRegister.png'
    }
]

const Home = () => {
    return (
        <div className="row text-center">
             {
                 tasks.map((task, index) =><Task key={index} task={task}></Task>)
             }
        </div>
    );
};

export default Home;