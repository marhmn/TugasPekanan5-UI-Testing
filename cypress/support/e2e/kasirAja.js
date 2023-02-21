
describe('Login', () => {
    it('Gagal melakukan login', () => {
        cy.visit('https://kasirdemo.belajarqa.com/')
    
        cy.get('#email').type('m.a.rahman0505@gmail.com')
        cy.get('#password').type('rohman2020')
        cy.get('.chakra-button').click()

        cy.contains('Kredensial yang Anda berikan salah').should('be.visible')
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
      cy.wait(2000)
    })

})

// describe('klik semua menu yang ada di dashboard', () => {
//     it('Klik menu ', () => {
//       cy.visit('https://kasirdemo.belajarqa.com/')
  
//       cy.get('#email').type('m.a.rahman0505@gmail.com')
//       cy.get('#password').type('rohman2023')
//       cy.get('.chakra-button').click()

//       cy.get('div.chakra-stack:nth-child(1) > a:nth-child(2) > div:nth-child(1)').click()
        
//       // Klik pada menu 'Penjualan'
//       cy.contains('penjualan').click()
//       cy.wait(2000)
//       // Periksa apakah URL mengandung '/penjualan'
//       cy.url().should('include', '/sales')
    
//       // Klik pada menu 'Pembelian'
//       cy.contains('pembelian').click()
//       cy.wait(2000)
//       // Periksa apakah URL mengandung '/purchases'
//       cy.url().should('include', '/purchases')
      
//       // Klik pada menu 'Kategori'
//       cy.contains('kategori').click()
//       cy.wait(2000)
//       // Periksa apakah URL mengandung '/kategori'
//       cy.url().should('include', '/categories')    
     
//       // Klik pada menu 'Produk'
//       cy.contains('produk').click()
//       cy.wait(2000)
//       // Periksa apakah URL mengandung '/products'
//       cy.url().should('include', '/products')    
  
//       // Klik pada menu 'Pengguna'
//       cy.contains('pengguna').click()
//       cy.wait(2000)
//       // Periksa apakah URL mengandung '/users'
//       cy.url().should('include', '/users')
      
//       // Klik pada menu 'Pelanggan'
//       cy.contains('pelanggan').click()
//       cy.wait(2000)
//       // Periksa apakah URL mengandung '/customers'
//       cy.url().should('include', '/customers')    

//     })
//   })

  describe('Tambah Kategori', () => {
    it('Tambah Kategori berhasil ', () => {
      cy.visit('https://kasirdemo.belajarqa.com/')
  
      cy.get('#email').type('m.a.rahman0505@gmail.com')
      cy.get('#password').type('rohman2023')
      cy.get('.chakra-button').click()

      cy.get('div.chakra-stack:nth-child(1) > a:nth-child(2) > div:nth-child(1)').click()
      
      // Klik pada menu 'Kategori'
      cy.contains('kategori').click()
      cy.wait(2000)
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
  })

  it('Gagal tambah Kategori ', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')

    cy.get('#email').type('m.a.rahman0505@gmail.com')
    cy.get('#password').type('rohman2023')
    cy.get('.chakra-button').click()

    cy.get('div.chakra-stack:nth-child(1) > a:nth-child(2) > div:nth-child(1)').click()
    
    // Klik pada menu 'Kategori'
    cy.contains('kategori').click()
    cy.wait(2000)
    // Periksa apakah URL mengandung '/kategori'
    cy.url().should('include', '/categories')
    
    // Klik pada button 'Tambah'
    cy.get('a.chakra-button').click()
    // Periksa apakah URL mengandung '/categories/create'
    cy.url().should('include', '/categories/create')


    cy.contains('simpan').click();

    cy.contains('"name" is not allowed to be empty').should('be.visible')
})

})

describe('Edit Kategori', () => {
  it('Edit Kategori berhasil ', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')

    cy.get('#email').type('m.a.rahman0505@gmail.com')
    cy.get('#password').type('rohman2023')
    cy.get('.chakra-button').click()

    cy.get('div.chakra-stack:nth-child(1) > a:nth-child(2) > div:nth-child(1)').click()
    
    // Klik pada menu 'Kategori'
    cy.contains('kategori').click()
    cy.wait(2000)
    // Periksa apakah URL mengandung '/kategori'
    cy.url().should('include', '/categories')
    
    // Klik pada button 'Ubah'
    cy.get('#menu-list-171-menuitem-168').click()

    cy.get('#nama').type('khusus updated')
    cy.get('#deskripsi').type('Item khusus updated')
    cy.contains('simpan').click();

    cy.contains('success').should('be.visible')
})

it('Edit Kategori gagal ', () => {
  cy.visit('https://kasirdemo.belajarqa.com/')

  cy.get('#email').type('m.a.rahman0505@gmail.com')
  cy.get('#password').type('rohman2023')
  cy.get('.chakra-button').click()

  cy.get('div.chakra-stack:nth-child(1) > a:nth-child(2) > div:nth-child(1)').click()
  
  // Klik pada menu 'Kategori'
  cy.contains('kategori').click()
  cy.wait(2000)
  // Periksa apakah URL mengandung '/kategori'
  cy.url().should('include', '/categories')
  
  // Klik pada button 'Ubah'
  cy.get('#menu-list-171-menuitem-168').click()

  cy.get('#nama').clear();
  cy.contains('simpan').click();

  cy.contains('"name" is not allowed to be empty').should('be.visible')
})

})