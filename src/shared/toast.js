import React from 'react';
import { Toaster, toast } from 'sonner';

// ...

function Toast() {
  return (
    <div>
      {/* <button onClick={() => toast.success('My first toast')} className='text-gray-600'>Give me a toast</button> */}
      <Toaster richColors/>
    </div>
  );
}

export default Toast