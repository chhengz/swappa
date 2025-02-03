import React from 'react'
import { Link } from 'react-router-dom'

const members = [
  { name: 'Vang Sokchheng', email: 'vang.sokchheng.1222@rupp.edu.kh', role: 'Leader' },
  { name: 'Phan Davith', email: 'phan.davith.1222@rupp.edu.kh', role: 'Member' },
  { name: 'Moeun Makara', email: 'moeun.makara.1222@rupp.edu.kh', role: 'Member' },
  { name: '', email: '.1222@rupp.edu.kh', role: 'Member' },
]

const About = () => {
  return (
    <div className='container'>
      <h1>About</h1>
      <Link to='/' className='btn btn-primary'>Home</Link>
      <ul className='gap-2'>
        {
          members.map((list)=>(
            <li key={list.name} className='border border-4 border-md p-2 my-2'>
              <h2>Name: {list.name}</h2>
              <h3>Email: {list.email}</h3>
              <h3>Role: {list.role}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default About