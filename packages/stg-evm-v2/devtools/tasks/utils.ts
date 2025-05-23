export function checkResult(result: any, config: string) {
    if (result.length === 3 && (result[0].length > 0 || result[1].length > 0 || result[2].length > 0)) {
        printMessage(false, config)
        throw new Error(`There are still ${result[2].length} pending transactions to wire`)
    } else {
        printMessage(true, config)
    }
    return result
}

function printMessage(success: boolean, config: string) {
    const message = success
        ? `✅ SUCCESS: ${config} is fully wired and configured!`
        : `❌ ERROR: ${config} is not fully wired!`
    const padding = 3 // Padding on each side
    const width = message.length + padding * 2 + 1

    // Create the top and bottom borders
    const topBorder = '╔' + '═'.repeat(width) + '╗'
    const bottomBorder = '╚' + '═'.repeat(width) + '╝'
    const emptyLine = '║' + ' '.repeat(width) + '║'

    // Create the message line with padding
    const messageLine = '║' + ' '.repeat(padding) + message + ' '.repeat(padding) + '║'

    console.log(topBorder)
    console.log(emptyLine)
    console.log(messageLine)
    console.log(emptyLine)
    console.log(bottomBorder)
    console.log('\n')
}
