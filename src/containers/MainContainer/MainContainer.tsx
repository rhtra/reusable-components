import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'
import Dropdown from '../../components/Dropdown/Dropdown'
import useDropdown from '@/hooks/useDropdown'
import useButton from '@/hooks/useButton'

type SectionProps = {
  textType: string
  textVariant: string
  textSize: string
  textBorderInset: string
}

const Section = ({
  textType,
  textVariant,
  textSize,
  textBorderInset,
  buttonColor,
  buttonSize,
  buttonVariant,
  buttonType,
  buttonBorderInset,
  buttonDisabled,
}: SectionProps) => {
  return (
    <>
      <div className="relative mt-4">
        <div className="flex">
          <TextField
            type={textType}
            variant={textVariant}
            size={textSize}
            borderInset={textBorderInset}
            className="mr-4"
          />
          <Button
            variant={buttonVariant}
            type={buttonType}
            color={buttonColor}
            borderInset={buttonBorderInset}
            disabled={buttonDisabled}
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}

const MainContainer = () => {

  const {
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
  } = useDropdown()

  const {
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
  } = useButton()

  return (
    <div className="-mt-20 w-full max-w-2xl bg-white bg-opacity-20 py-24 px-16">
      <div className="relative mt-4 w-full mb-5">
        <h4 className="mb-5 text-center text-3xl font-bold text-white">
          <span className="font-thin">Text Input</span>
        </h4>
        <span className="text-center font-light text-gray-200"> Type </span>
        <Dropdown 
          options={textTypeDropdownOptions}
          onChange={handleChangeType}
          selectedValue={textType}
        />
        <span className="text-center font-light text-gray-200"> Size </span>
        <Dropdown 
          options={textSizeDropdownOptions}
          onChange={handleChangeSize}
          selectedValue={textSize}
        />
        <span className="text-center font-light text-gray-200"> Variant </span>
        <Dropdown 
          options={textVariantDropdownOptions}
          onChange={handleChangeVariant}
          selectedValue={textVariant}
        />
        {
          textVariant === 'custom' ? (
          <>
            <span className="text-center font-light text-gray-200"> Border Inset </span>
            <Dropdown 
              options={borderDropdownOptions}
              onChange={handleChangeBorder}
              selectedValue={textBorderInset}
            />
          </> ) : null
        } 
      </div>

      <div className="relative mt-4 w-full mb-10">
        <h4 className="mb-5 text-center text-3xl font-bold text-white">
          <span className="font-thin">Button</span>
        </h4>
        <div className="mb-5">
          <span className="text-center font-light text-gray-200"> Type </span>
          <Dropdown 
            options={buttonTypeDropdownOptions}
            onChange={handleButtonChangeType}
            selectedValue={buttonType}
          />
          <span className="text-center font-light text-gray-200"> Size </span>
          <Dropdown 
            options={buttonSizeDropdownOptions}
            onChange={handleButtonChangeSize}
            selectedValue={buttonSize}
          />
          <span className="text-center font-light text-gray-200"> Variant </span>
          <Dropdown 
            options={buttonVariantDropdownOptions}
            onChange={handleButtonChangeVariant}
            selectedValue={buttonVariant}
          />
          <span className="text-center font-light text-gray-200"> Border Inset </span>
          <Dropdown 
            options={borderDropdownOptions}
            onChange={handleButtonChangeBorder}
            selectedValue={buttonBorderInset}
          />
        </div>
        <div>
          <span className="text-center font-light text-gray-200"> Color </span>
          <Dropdown 
            options={buttonColorDropdownOptions}
            onChange={handleButtonChangeColor}
            selectedValue={buttonColor}
          />
          <span className="text-center font-light text-gray-200"> Disabled </span>
          <Dropdown 
            options={buttonDisabledDropdownOptions}
            onChange={handleButtonDisable}
            selectedValue={buttonDisabled}
          />
        </div>
      </div>

      <Section
        textType={textType}
        textVariant={textVariant}
        textSize={textSize}
        textBorderInset={textBorderInset}
        buttonColor={buttonColor}
        buttonSize={buttonSize}
        buttonVariant={buttonVariant}
        buttonType={buttonType}
        buttonBorderInset={buttonBorderInset}
        buttonDisabled={buttonDisabled}
      />
    </div>
  )
}

export default MainContainer
