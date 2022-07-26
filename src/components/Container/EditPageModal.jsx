import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//* Package Imports *//
import { Modal, Box, Typography, Button } from "@mui/material";

const EditPageModal = ({ page, handleUpdatePage }) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 4,
    color: "white",
  };

  const navigate = useNavigate()
  const [formData, setFormData] = useState(page)

  // MUI
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    handleUpdatePage(formData)
    handleClose()
    navigate(`/${formData.title}`)
  }

  return (
    <div>
      <Button
        sx={{ p: 0 }}
        onClick={handleOpen}
      >
        Edit Page Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Edit Page Details
          </Typography>
          <Typography id='modal-modal-description' component={'span'} sx={{ mt: 2 }}>
            <form className="flex flex-col gap-6 pt-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    Title <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category-input">
                    Description
                  </label>
                  <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button onClick={() => handleSubmit}>
                SUBMIT
              </button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div >
  )

}

export default EditPageModal
