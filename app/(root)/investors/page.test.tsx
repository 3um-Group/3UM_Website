import { render, screen } from '@testing-library/react'
import InstitueInstitutionalInvestorsSection from './page'

describe('Investor Page has Our Mission topic', () => {

    test('should render the "Our Mission" heading', () => {
        // ARRANGE
        render(<InstitueInstitutionalInvestorsSection />) 

        //ACT
        const header = screen.getByRole('heading', {
            name: 'Our Mission'
        })
        
        // ASSERT
        expect(header).toBeInTheDocument()
    })

})
