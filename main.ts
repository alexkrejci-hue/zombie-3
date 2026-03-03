let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
animation.runImageAnimation(
mySprite,
assets.animation`myAnim1`,
200,
false
)
