
describe('UI Test KasirAja', () => {

      beforeEach('Sukses Login',() => {
        cy.visit('https://kasirdemo.belajarqa.com/')
  
        cy.get('#email').type('m.a.rahman0505@gmail.com')
        cy.get('#password').type('rohman2023')
        cy.get('.chakra-button').click()

        // Periksa apakah URL mengandung '/dashboard'
        cy.url().should('include', '/dashboard')

        // Periksa apakah elemen 'kasirAja' ada di halaman
        cy.contains('kasirAja').should('be.visible')
      })
      

    it('Tambah Kategori berhasil ', () => {
      cy.contains('kategori').click()
      // Periksa apakah URL mengandung '/kategori'
      cy.url().should('include', '/categories')
      
      // Klik pada button 'Tambah'
      cy.get('a.chakra-button').click()
      // Periksa apakah URL mengandung '/categories/create'
      cy.url().should('include', '/categories/create')

      cy.get('#nama').type('khusus')
      cy.get('#deskripsi').type('Item khusus')
      cy.contains('simpan').click();

      cy.contains('success').should('be.visible')
      cy.wait(2000)

  })

  it('Gagal tambah Kategori ', () => {

    cy.wait(2000)
    cy.contains('kategori').click()
    // Periksa apakah URL mengandung '/kategori'
    cy.url().should('include', '/categories')
    
    // Klik pada button 'Tambah'
    cy.get('a.chakra-button').click()
    // Periksa apakah URL mengandung '/categories/create'
    cy.url().should('include', '/categories/create')

    cy.get('#nama').clear()
    cy.get('#deskripsi').type('Item khusus')
    cy.contains('simpan').click();

    cy.contains('"name" is not allowed to be empty').should('be.visible')
    cy.wait(2000)
})

it('tambah pelanggan berhasil ', () => {

  // Klik pada menu 'pelanggan'
  cy.contains('pelanggan').click()
  // Periksa apakah URL mengandung '/customers'
  cy.url().should('include', '/customers')
  
  cy.get('#root > div > div > div > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
  cy.get('#nama').type('pelanggan')
  cy.get('div.chakra-form-control:nth-child(2) > div:nth-child(2)').type('08123456789')
  cy.get('#alamat').type('test alamat')
  cy.get('#keterangan').type('test keterangan')
  cy.contains('simpan').click();
  cy.contains('success').should('be.visible')
  cy.wait(2000)
})

it('tambah pelanggan gagal ', () => {

  // Klik pada menu 'Pelangan'
  cy.contains('pelanggan').click()
  // Periksa apakah URL mengandung '/customers'
  cy.url().should('include', '/customers')
  
  cy.get('#root > div > div > div > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()

  cy.contains('simpan').click();
  cy.contains('"name" is not allowed to be empty').should('be.visible')
  cy.wait(2000)
})


})