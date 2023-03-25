import React from 'react';
const User = ({user})=> {
  return (
    <>
    <h1>List of users</h1>
    <div className='container-fluid mt-5'>
      <div className="row text-center">
        {
          user.map((element)=>{
            const {avatar_url,id,login,}=element;
            return (
              <>
              <div className='col-10 col-md-4 mt-5' key={id}>
                <div className='image'><img src={avatar_url} className="rounded"width="155"/></div>
                <div className='ml-3 w-100'>
                  <h4 className='mb-0 mt-0 textLeft'>Thapa</h4>
                  <span className='textLeft'>{login}</span>

                  <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                    <div className='d-flex flex-column'>
                    <span className='articles'>Articles</span>
                    <span className='number1'>38</span>
                    </div>

                    <div className='d-flex flex-column'>
                    <span className='followers'>Followers</span>
                    <span className='number2'>988</span>
                    </div>

                    <div className='d-flex flex-column'>
                    <span className='Rating'>Rating</span>
                    <span className='number3'>8.9</span>
                    </div>
                  </div>
                </div>
              </div>
              </>
            )
          })
        }

      </div>
    </div>
    
    </>
  )

}
export default User;