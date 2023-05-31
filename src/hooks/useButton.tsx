import { useEffect, useRef, useState } from 'react'

const useDropdown = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [buttonColor, setButtonColor] = useState<string>('text')
  const [buttonType, setButtonType] = useState<string>('default')
  const [buttonSize, setButtonSize] = useState<string>('standard')
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
  const [buttonBorderInset, setButtonBorderInset] = useState<string>('none')
  const [buttonVariant, setButtonVariant] = useState<string>('text')

  const buttonColorDropdownOptions = [
    { label: 'Primary', value : 'primary'},
    { label: 'Secondary', value : 'secondary'},
    { label: 'Warning', value : 'warning'},
    { label: 'Info', value : 'info'},
    { label: 'Success', value : 'success'},
    { label: 'Error', value : 'error'}
  ];

  const buttonSizeDropdownOptions = [
    { label: 'Small', value : 'small'},
    { label: 'Medium', value : 'medium'},
    { label: 'Large', value : 'large'},
  ];

  const buttonTypeDropdownOptions = [
    { label: 'Button', value : 'button'},
    { label: 'Submit', value : 'submit'},
    { label: 'Reset', value : 'reset'},
  ];

  const buttonVariantDropdownOptions = [
    { label: 'Text', value : 'text'},
    { label: 'Contained', value : 'contained'},
    { label: 'Outlined', value : 'outlined'},
    { label: 'Custom', value : 'custom'}
  ];

  const buttonDisabledDropdownOptions = [
    { label: 'True', value : true},
    { label: 'False', value : false},
  ];

  const handleButtonChangeType = (e) => {
    setButtonType(e.target.value);
  }

  const handleButtonChangeSize = (e) => {
    setButtonSize(e.target.value);
  }

  const handleButtonChangeVariant = (e) => {
    setButtonVariant(e.target.value);
  }

  const handleButtonChangeBorder = (e) => {
    setButtonBorderInset(e.target.value);
  }

  const handleButtonChangeColor = (e) => {
    setButtonColor(e.target.value);
  }

  const handleButtonDisable = (e) => {
    setButtonDisabled(e.target.value);
  }


  return {
     buttonColor,
     buttonSize,
     buttonVariant,
     buttonType,
     buttonBorderInset,
     buttonDisabled,
     buttonColorDropdownOptions,
     buttonSizeDropdownOptions,
     buttonTypeDropdownOptions,
     buttonVariantDropdownOptions,
     buttonDisabledDropdownOptions,
     handleButtonChangeColor,
     handleButtonChangeType,
     handleButtonChangeVariant,
     handleButtonDisable,
     handleButtonChangeBorder,
     handleButtonChangeSize,
  }
}

export default useDropdown
