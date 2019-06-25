import { Composer } from "../Composer"
import { ComposerContext } from "../ComposerContext"
import { TextWriter } from "../TextWriter"
import { HtmlNode } from "../HtmlNode"

export class BrComposer implements Composer {
  compose(context: ComposerContext, writer: TextWriter, input: HtmlNode): void {
    const expectedNodeType = "tag"
    const expectedNodeName = "br"
    console.assert(
      input.type === expectedNodeType && input.name === expectedNodeName,
      `expected input to be ${expectedNodeType}:${expectedNodeName}, but was: ${JSON.stringify(
        { type: input.type, name: input.name }
      )}`
    )
    writer.newLine()
  }
}
