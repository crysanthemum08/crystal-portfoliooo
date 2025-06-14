import React from 'react'
import skills from '../../images/skills.png';
import mysql from '../../images/mysql.png';
import java from '../../images/java.png';
import dart from '../../images/dart.png';
import php from '../../images/php.png';
import firebase from '../../images/firebase.png';
import laravel from '../../images/laravel.png';
import flutter from '../../images/flutter.png';
function OtherSkills() {
    return (
        <div className='text-center pt-2 w-full'>
            <img src={skills} alt = "skills" className='mx-auto w-[120px] mt-5 mb-5'/>
            <h3 className = "text-[25px] font-roboto font-extrabold tracking-wide mb-6">
                Other Skills
            </h3>
            <div className='w-fit mx-auto leading-loose pb-10 font-roboto text-center'>
                <div>
                    <h4 className='text-blue font-bold text-[20px]'>
                        Programming
                    </h4>
                    <div className='flex text-[18px] space-x-2 p-[10px] text-center'>
                        <img src = {java} alt = 'java' className='w-[30px]' />
                        <span>Java</span>
                    </div>
                    <div className='flex text-[18px] space-x-2 p-[10px] text-center'>
                        <img src = {php} alt = 'java' className='w-[30px]' />
                        <span>PHP</span>
                    </div>
                    <div className='flex text-[18px] space-x-2 p-[10px] text-center'>
                        <img src = {dart} alt = 'java' className='w-[30px]' />
                        <span>Dart</span>
                    </div>
                    <h4 className='text-blue font-bold text-[20px]'>
                        Frameworks
                    </h4>
                    <div className='flex text-[18px] space-x-2 p-[10px] text-center'>
                        <img src = {laravel} alt = 'java' className='w-[30px]' />
                        <span>Laravel</span>
                    </div>
                    <div className='flex text-[18px] space-x-2 p-[10px] text-center'>
                        <img src = {flutter} alt = 'java' className='w-[30px]' />
                        <span>Flutter</span>
                    </div>
                </div>
                <div>
                    <h4 className='text-blue font-roboto font-bold text-[20px] mt-1'>
                        Database
                    </h4>
                    <div className='flex text-[18px] space-x-2 p-[10px]'>
                        <img src = {mysql} alt = 'mysql' className='w-[30px]'/>
                        <span>MySQL</span>
                    </div>
                    <div className='flex text-[18px] space-x-2 p-[10px]'>
                        <img src = {firebase} alt = 'mysql' className='w-[30px]'/>
                        <span>Firebase</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default OtherSkills
