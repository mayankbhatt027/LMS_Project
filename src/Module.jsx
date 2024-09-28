import React from 'react'
import './new.css'
import { useState,useEffect } from 'react';
import Modaldata from "./Modaldata"

import style from "./maincompo.module.css"

function Module() {

    const [modal,setModal]=useState(false);
    function show()
    {
    setModal((prev)=> !prev);
    }

    const Module_data=[
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800},
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:"Core Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
        {head:" Python",head1:"Duration",day:"45 days",head2:"Total Topic",topic:29,head3:"Fees",fees:11800}, 
    ];


    const [input,setinput]=useState("");
const[filter,setfilter]=useState(Module_data);
let main_value=input.toLowerCase();

function searcher(){
    let Card=Module_data.filter((cart)=>{
        let Keys=Object.keys(cart);
        for(let i=0;i<Keys.length;i++){
            let keyarr=Keys[i];
            if(String(cart[keyarr]).toLowerCase().includes(main_value)===true){
                return cart;
            }
        }
    })
    setfilter(Card);
}
useEffect(()=>{
    searcher();
},[input]);


  return (
    <>
    <div className={style.rightcompo}>
         <i onClick={searcher} class="fa-solid fa-magnifying-glass ml-4"></i><input className='rounded-full mt-6  leading-8 pl-4 ' placeholder='Search Module...' 
            type='text'
                value={input} 
                onChange={(e)=> setinput(e.target.value)} 
         />
         <div>
              <div className='flex flex-wrap'>
              {filter.map((map)=>{
                return(

                
                <div className='bg-slate-100 w-96 h-28 rounded-lg ml-4 mt-4 border-b-7 border-sky-800'>
                    <div className='text-sky-800 pl-4 flex place-content-between'>
                    <div>{map.head}</div>
                            <i onClick={show} class="fa-solid fa-pen"></i>
                            {modal && <Modaldata show={show}/>}
                        </div>

                        <div className='flex'>
                        <div className='bg-white w-24 h-14 mt-2.5 ml-4 border-b-4 border-green-500  rounded-md'>
                            <p className='pl-5'>{map.head1}</p>
                            <p className='pl-6'>{map.day}</p>
                        </div>


                        <div className='bg-white w-24 h-14 mt-2.5 ml-4 border-b-4 border-green-500 rounded-md'>
                            <p className='pl-4'>{map.head2}</p>
                            <p className='pl-10'>{map.topic}</p>
                        </div>

                        <div className='bg-white w-24 h-14 mt-2.5 ml-4 border-b-4 border-green-500 rounded-md'>
                            <p className='pl-9'>{map.head3}</p>
                            <p className='pl-8'>{map.fees}</p>
                        </div>
                    </div>
                      
                      </div>  
                    )
                 })}
                </div>
               
          </div>
    </div> 
           
    </>
  )
}

export default Module;

               
