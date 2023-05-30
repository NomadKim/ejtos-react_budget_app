const Currency = (props)=>{
    return(
        <div className='alert bg-success text-white'>
            <span>Currency(<select className="bg-success text-white" id="currency" name="Currency" size="1"
            onChange = {(e)=>{props.changeCurrency(e.target.value)}}> 
  <option value="dollar">$ Dollar</option>
  <option value="pound">£ Pound</option>
  <option value="euro">€ Euro</option>
  <option value="ruppee">₹ Ruppee</option>
</select>
            )</span>
        </div>
    )

}

export default Currency;