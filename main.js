window.onload = () => {
  const projCards = document.querySelectorAll('.proj-card-techs')
  projCards.forEach((card) => {
    // Count the tech items
    const techCount = card.querySelectorAll('p').length

    // Find the related number-of-techs span (go up to .proj-card-content)
    const numberSpan = card
      .closest('.proj-card-content')
      .querySelector('.proj-card-number-of-techs')

    // Update the text
    numberSpan.textContent = `${techCount} Tech${techCount !== 1 ? 's' : ''}`
  })
}
