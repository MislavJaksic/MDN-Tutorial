## [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)

### Conflicting rules

When CSS rules conflict then:
* `Cascade`: later rules override previous rules
* `Specificity`: more specific selectors override less specific selectors
* `Inheritance`: some element properties are inherited by their children, look them up

### Understanding inheritance

#### Controlling inheritance

Values:
* `inherit`: turn on inheritance
* `initial`: set property value to the default value
* `unset`: reset inheritance rules to their default state

### Understanding the cascade

Order in which CSS rules are applied:
* `Importance`: `!important` value beats everything; avoid!
* `Specificity`: inline styling beats ID selector beats class/attribute/pseudo-class selector beats element/pseudo-element selector
* `Source order`: later rules override previous rules
