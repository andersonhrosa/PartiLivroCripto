const PartiLivro = artifacts.require('./PartiLivro.sol')

contract('PartiLivro', (accounts) => {
  before(async () => {
    this.partiLivro = await PartiLivro.deployed()
  })

  it('deploys successfully', async () => {
    const address = await this.partiLivro.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('lists books', async () => {
    const bookCount = await this.partiLivro.bookCount()
    const book = await this.partiLivro.books(bookCount)
    assert.equal(book.id.toNumber(), bookCount.toNumber())
    assert.equal(book.content, '1984')
    assert.equal(book.completed, false)
    assert.equal(bookCount.toNumber(), 1)
    assert.equal(book.author, 'Jorge Orwell')
    assert.equal(book.publishing, 'Editora Alpha')
    assert.equal(book.pages, '416')
    assert.equal(book.date, '01/07/2009')
  })

  it('creates books', async () => {
    const result = await this.partiLivro.createBook('A new book', 'new author', 'a publishing company', 'n pages', '01/01/2000')
    const bookCount = await this.partiLivro.bookCount()
    assert.equal(bookCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'A new book')
    assert.equal(event.completed, false)
    assert.equal(event.author, 'new author')
    assert.equal(event.publishing, 'a publishing company')
    assert.equal(event.pages, 'n pages')
    assert.equal(event.date, '01/01/2000')
  })

  it('toggles book completion', async () => {
    const result = await this.partiLivro.toggleCompleted(1)
    const book = await this.partiLivro.books(1)
    assert.equal(book.completed, true)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 1)
    assert.equal(event.completed, true)
  })
})