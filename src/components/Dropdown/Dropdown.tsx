type OptionType = {
  value: string,
  label: string,
}

type DropdownProps = {
  id?: string
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedValue?: string
  options: OptionType[]
  className?: string
}

const Dropdowm = (props: DropdownProps) => {
  const {
    id,
    name,
    onChange,
    selectedValue,
    options,
    className,
  } = props
  return (
    <select className={className} id={id} name={name} onChange={onChange} value={selectedValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdowm;
