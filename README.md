# Sunnyside Agency

| Challenge Parameters       | Challenge Details  |
| :------------------------- |:-------------------|
| Create a public repository | `sunnyside-agency` |
| Challenge type             | Consolidation      |
| Duration                   | 2 days             |
| Team                       | Solo-Duo           |
| Deadline                   | Thursday evening   |
| Submission form            | None               |

## Learning objectives

- Write meaningful, semantically correct HTML
- Use modern positioning techniques using the `grid` or `flexbox` model
- Create a "pixel-perfect" integration from a given wireframe

## The mission

![desktop preview](./desktop-preview.jpg)

You've been asked to implement a design for a newly created agency.

The graphic designer gave you all the elements so you can code the thing yourself. You have 2 days, with the power of flexboxes and/or grids you should be able to make it!

**You should use Sass + the power of B.E.M.**

## What should you use and investigate? (feel free to explorer even further)

- B.E.M.
- SASS (scss)
- Semantic HTML
- Responsive [HTML images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- Pixel perfection, what does it mean?
- When to use PX, REM, EM? 🤯
- Trello
- Sketching a website to understand it more
- Burger menu (possible without JavaScript)
- Correct use of multiple selectors
- CSS Grid
- CSS Flex-box
- SEO close to perfection

### B.E.M. example:

```html
<!--Testimonial section-->
<article class="testimonial">
  <h3 class="testiomonial__name">Elizabeth Swann.</h3>
  <div class="testimonial__image">
    <img class="image__responsive--small" src="..." alt="BEM is efficient" />
  </div>
  <p class="testimonial__text">...</p>
</article>
```

```scss
/*This is how we would call Blocks, elements(__) and modifiers (--)*/

.testimonial {
  ... &__name {
    ...;
  }

  &__image {
    ...;
  }

  &__text {
    ...;
  }
}

.image {
  ...;

  &__responsive {
    ...;

    &__small {
      /*this is the maximum level of nesting you should go!*/
    }
  }
}
```

## Resources

All the informations you need are available in the resources folder.

There is also a figma available here : https://www.figma.com/file/XAkjbnDhAjD4hzHPMmAS4U/sunnyside-becode

## Done? ... NOT SO FAST

![](https://media.giphy.com/media/tB8Wl0JABkSkQa7vGE/giphy.gif)

## Bonus for the people done before the deadline

- Generate a report with [Lighthouse](https://developers.google.com/web/tools/lighthouse) & try to improve it as mush as you can
- Make hover animation
- Look for animation opportunities
- See if you can animate the content, as you scroll down and reset when we scroll up. (fade in, fade out?)
- Be creative! This would be something for your portfolio, make it perfect! clean it up, add new things.
