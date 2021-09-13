import { Button, Container, Form, FormControl } from "react-bootstrap"
import { useState, useEffect } from "react"

const Search = () => {
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetchData()
  }, [searchValue])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://remotive.io/api/remote-jobs?search=front%20end`
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Form inline className="justify-content-center mt-5" size="sm">
        <FormControl
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Container>
  )
}
export default Search
