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
    assert.equal(book.content, 'Check out partilivro.azurewebsites.net')
    assert.equal(book.completed, false)
    assert.equal(bookCount.toNumber(), 1)
  })

  it('creates books', async () => {
    const result = await this.partiLivro.createBook('A new book')
    const bookCount = await this.partiLivro.bookCount()
    assert.equal(bookCount, 2)
    const event = result.logs[0].args
    assert.equal(event.id.toNumber(), 2)
    assert.equal(event.content, 'A new book')
    assert.equal(event.completed, false)
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