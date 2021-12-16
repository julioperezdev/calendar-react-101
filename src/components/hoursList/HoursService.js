import Swal from "sweetalert2"
import ReactTooltip from 'react-tooltip';

export const isAvailableHour = (booleanValue) => {
    booleanValue ? 
    sendSwal():
    sendToggle()
}

export const returnToolTip = (booleanValue) =>{
    return booleanValue?
    null:
    <ReactTooltip />
}

export const decideStyleToHoursListEach = (booleanValue) =>{    
    return booleanValue?
    "hours-list-each-positive":
    "hours-list-each-negative"
}

const sendSwal = async() => {
    return await Swal.fire({
        title: 'Are you sure?',
        text:'Do you confirm this meet ?',
        icon:'question',
        showCancelButton: true,
        confirmButtonText: 'Save',
    }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } 
      })
}



const sendToggle = () => {
    return null

}
