import { AiOutlineMail, AiFillLock } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
 
 export const Address_inputitems = [
  {
    id: '1',
    name: 'name',
   
    icon: <BsFillPersonFill size={30} color="pink" />,
    type: 'name',
    placeholder: 'Enter Your name',
  },
  {
    id: '2',
    name: 'email',
    icon: <AiOutlineMail size={30} color="pink" />,
    type: 'email',
    placeholder: 'Enter Your email',
  },
  
  {
    id: '3',
    name: 'date_of_birth',  
    icon: <AiFillLock size={30} color="pink" />,
    type: 'date',
    placeholder: 'Enter Your date of birth',
  },
];

export const Personal_inputsitems = [
  {
    id: '1',
    name: 'Address',
   
    icon: <BsFillPersonFill size={30} color="pink" />,
    type: 'text',
    placeholder: 'Enter Your Address',
  },
  {
    id: '2',
    name: 'city',
    icon: <AiOutlineMail size={30} color="pink" />,
    type: 'text',
    placeholder: 'Enter Your city',
  },
  
  {
    id: '3',
    name: 'state',  
    icon: <AiFillLock size={30} color="pink" />,
    type: 'select',
    placeholder: 'Select Your State',
    options: [
      {value: '', label: 'Select Your State'},
      { value: 'AN', label: 'Andaman and Nicobar Islands' },
      { value: 'AP', label: 'Andhra Pradesh' },
      { value: 'AR', label: 'Arunachal Pradesh' },
      { value: 'AS', label: 'Assam' },
      { value: 'BR', label: 'Bihar' },
      { value: 'CH', label: 'Chandigarh' },
      { value: 'CT', label: 'Chhattisgarh' },
      { value: 'DN', label: 'Dadra and Nagar Haveli and Daman and Diu' },
      { value: 'DL', label: 'Delhi' },
      { value: 'GA', label: 'Goa' },
      { value: 'GJ', label: 'Gujarat' },
      { value: 'HR', label: 'Haryana' },
      { value: 'HP', label: 'Himachal Pradesh' },
      { value: 'JH', label: 'Jharkhand' },
      { value: 'KA', label: 'Karnataka' },
      { value: 'KL', label: 'Kerala' },
      { value: 'LD', label: 'Lakshadweep' },
      { value: 'MP', label: 'Madhya Pradesh' },
      { value: 'MH', label: 'Maharashtra' },
      { value: 'MN', label: 'Manipur' },
      { value: 'ML', label: 'Meghalaya' },
      { value: 'MZ', label: 'Mizoram' },
      { value: 'NL', label: 'Nagaland' },
      { value: 'OR', label: 'Odisha' },
      { value: 'PY', label: 'Puducherry' },
      { value: 'PB', label: 'Punjab' },
      { value: 'RJ', label: 'Rajasthan' },
      { value: 'SK', label: 'Sikkim' },
      { value: 'TN', label: 'Tamil Nadu' },
      { value: 'TG', label: 'Telangana' },
      { value: 'TR', label: 'Tripura' },
      { value: 'UP', label: 'Uttar Pradesh' },
      { value: 'UT', label: 'Uttarakhand' },
      { value: 'WB', label: 'West Bengal' },
    ],
    
  },
  {
    id: '4',
    name: 'zipcode',  
    icon: <AiFillLock size={30} color="pink" />,
    type: 'number',
    placeholder: 'Enter Your ZIP code',
  },
]


export const Account_inputsitems= [
  {
    id: '1',
    name: 'username',
    icon: <BsFillPersonFill size={30} color="pink" />,
    type: 'name',
    placeholder: 'Enter Your username',
  },
  {
    id: '2',
    name: 'password',
    icon: <AiFillLock size={30} color="pink" />,
    type: 'password',
    placeholder: 'Enter Your password',
  },
  {
    id: '3',
    name: 'confirmPassword',
    icon: <AiFillLock size={30} color="pink" />,
    type: 'password',
    placeholder: 'Confirm Password',
  },
];