import React, { FC, useState } from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { IFileWithMeta } from 'react-dropzone-uploader'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Redirect } from 'react-router'

const UploadPage: FC = () => {
  const [redirectToHome, setRedirectToHome] = useState(false)
  const getUploadParams = () => {
    return {
      url: 'https://api.thecatapi.com/v1/images/upload',
      headers: {
        'x-api-key': `${process.env.REACT_APP_API_KEY}`,
      },
    }
  }

  // called every time a file's `status` changes
  const handleChangeStatus = (
    { meta, file, xhr }: IFileWithMeta,
    status: any
  ) => {
    if (status === 'done') {
      setRedirectToHome(true)
    } else {
      let message = ''
      switch (status) {
        case 'error_upload':
          message = `server error: ${xhr?.statusText}`
          break
        case 'aborted':
          message = `upload was aborted`
          break
        case 'exception_upload':
          message = `the upload timed out or there's no connection to upload server`
          break
        case 'rejected_file_type':
          message = 'file type was rejected'
          break
        case 'rejected_max_files':
          message = 'max file size is exceeded'
          break
        case 'error_file_size':
          message = 'file size exceeded maximum limit'
          break
        default:
          break
      }
      if (message) {
        toast.error(
          `😞 Upload failed.
         message: ${message}
          Please try again!`,
          {
            position: 'top-center',
            hideProgressBar: false,
            autoClose: 6000,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
          }
        )
      }
    }
  }

  return (
    <>
      {redirectToHome && <Redirect to="/" />}
      <ToastContainer containerId="status-indicator" draggable={false} />
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        accept="image/*"
        maxFiles={1}
        maxSizeBytes={10000000}
        // onSubmit={() => {
        //   // submit is automatically handled by getUploadParams
        // }}
      />
    </>
  )
}

export default UploadPage
