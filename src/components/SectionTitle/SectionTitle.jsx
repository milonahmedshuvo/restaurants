

const SectionTitle = ({heading, subheading}) => {
  return (
    <div className="md:w-4/12 mx-auto mt-10">
        <h3 className="text-yellow-600 mb-2 text-center">{subheading}</h3>
        <p className="text-3xl uppercase border-y-4 py-4 mb-4 text-center"> {heading} </p>
    </div>
  )
}

export default SectionTitle
