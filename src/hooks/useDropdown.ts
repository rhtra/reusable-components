import { useEffect, useRef, useState } from 'react'

const useDropdown = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [textType, setTextType] = useState<string>('text')
  const [textSize, setTextSize] = useState<string>('default')
  const [textVariant, setTextVariant] = useState<string>('standard')
  const [textBorderInset, setTextBorderInset] = useState<string>('none')

  const textTypeDropdownOptions = [
    { label: 'Text', value : 'text'},
    { label: 'Number', value : 'number'},
    { label: 'Password', value : 'password'},
  ];

  const textSizeDropdownOptions = [
    { label: 'Default', value : 'default'},
    { label: 'Small', value : 'small'},
    { label: 'Medium', value : 'medium'},
    { label: 'Large', value : 'large'},
  ];

  const textVariantDropdownOptions = [
    { label: 'Standard', value : 'standard'},
    { label: 'Outlined', value : 'outlined'},
    { label: 'Filled', value : 'filled'},
    { label: 'Custom', value : 'custom'}
  ];

  const borderDropdownOptions = [
    { label: 'Top', value : 'top'},
    { label: 'Left', value : 'left'},
    { label: 'Right', value : 'right'},
    { label: 'Bottom', value : 'bottom'},
    { label: 'Full', value : 'full'},
    { label: 'None', value : 'none'},
  ];

  useEffect(() => {
    inputFocus()
  }, [])

  const inputFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleChangeType = (e) => {
    setTextType(e.target.value);
  }

  const handleChangeSize = (e) => {
    setTextSize(e.target.value);
  }

  const handleChangeVariant = (e) => {
    setTextVariant(e.target.value);
  }

  const handleChangeBorder = (e) => {
    setTextBorderInset(e.target.value);
  }

  return {
     inputRef,
     textType,
     textVariant,
     textSize,
     textBorderInset,
     handleChangeType,
     handleChangeVariant,
     handleChangeBorder,
     handleChangeSize,
     textTypeDropdownOptions,
     textSizeDropdownOptions,
     textVariantDropdownOptions,
     borderDropdownOptions,
  }
}

export default useDropdown
