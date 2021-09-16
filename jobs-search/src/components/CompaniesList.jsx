import Company from './Company'

const CompaniesList = ({ companies, changeCompany, selectedCompany }) => (
  <div>
    {companies.map((cia) => (
      <Book
        key={cia._id}
        company={cia.title}
        changeCompany={changeCompany}
        selectedCompany={selectedCompany}
      />
    ))}
  </div>
)

export default CompaniesList
