
describe('Login', () => {
    it('Gagal melakukan login', () => {
        cy.visit('https://kasirdemo.belajarqa.com/')
    
        cy.get('#email').type('m.a.rahman0505@gmail.com')
        cy.get('#password').type('rohman2020')
        cy.get('.chakra-button').click()

        cy.contains('Kredensial yang Anda berikan salah').should('be.visible')
        cy.wait(1000)
      })
    
    it('sukses melakukan login', () => {
      cy.visit('https://kasirdemo.belajarqa.com/')
  
      cy.get('#email').type('m.a.rahman0505@gmail.com')
      cy.get('#password').type('rohman2023')
      cy.get('.chakra-button').click()
  
      // Periksa apakah URL mengandung '/dashboard'
      cy.url().should('include', '/dashboard')

      // Periksa apakah elemen 'kasirAja' ada di halaman
      cy.contains('kasirAja').should('be.visible')

    })

    

})

describe('klik semua menu yang ada di dashboard', () => {
    it('Klik menu ', () => {
      cy.visit('https://kasirdemo.belajarqa.com/')
  
      cy.get('#email').type('m.a.rahman0505@gmail.com')
      cy.get('#password').type('rohman2023')
      cy.get('.chakra-button').click()

      cy.get('div.chakra-stack:nth-child(1) > a:nth-child(2) > div:nth-child(1)').click()
        
      // Klik pada menu 'Laporan Penjualan'
      cy.contains('penjualan').click()

      // Periksa apakah URL mengandung '/penjualan'
      cy.url().should('include', '/sales')

      // Klik pada menu 'Barang'
      cy.contains('pembelian').click()

      // Periksa apakah URL mengandung '/barang'
      cy.url().should('include', '/purchases')

      // Klik pada menu 'Kategori'
      cy.contains('produk').click()

      // Periksa apakah URL mengandung '/kategori'
      cy.url().should('include', '/products')    

      // Klik pada menu 'Kategori'
      cy.contains('pengguna').click()

      // Periksa apakah URL mengandung '/kategori'
      cy.url().should('include', '/users')    

      // Klik pada menu 'Kategori'
      cy.contains('pelanggan').click()

      // Periksa apakah URL mengandung '/kategori'
      cy.url().should('include', '/customers')    

  })

})