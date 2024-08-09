import React from 'react'
import ForgotPassword from './ForgotPassword'
import "../../Styles/Login.css"
import "./PopupBox.css"
import EnterOTP from './EnterOTP'
import NewPassword from './NewPassword'
import DeleteConfirmation from './DeleteConfirmation'
import EnterPin from './EnterPin'
import VerifyAgain from './VerifyAgain'
import AddUnit from './AddUnit'
import UpdateUnit from './UpdateUnit'
import UpdateDue from './UpdateDue'
import AddCategory from './AddCategory'
import UpdateCategory from './UpdateCategory'
const PopUpMain = (id) => {
  const [ids, setids]=React.useState(id.id)
  return (
    <div className='absolute w-full h-full z-[99] model-box'>
      {/* <ForgotPassword ids={ids} setids={setids} />
      <EnterOTP ids={ids} setids={setids} />
      <NewPassword ids={ids} setids={setids} />
      <DeleteConfirmation ids={ids} setids={setids} />
      <EnterPin ids={ids} setids={setids} />
      <VerifyAgain ids={ids} setids={setids} />
      <AddUnit ids={ids} setids={setids} />
      <UpdateUnit ids={ids} setids={setids} />
      <UpdateDue ids={ids} setids={setids} /> */}
      <AddCategory ids={ids} setids={setids} />
      {/* <UpdateCategory ids={ids} setids={setids} /> */}
    </div>
  )
}

export default PopUpMain