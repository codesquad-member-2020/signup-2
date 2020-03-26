//
//  AlertLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/24.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class SignUpAlertLabel: UILabel {
    
    let wrongMessage: String
    let correctMessage: String
    private let height: CGFloat = 20
    
    init(wrongMessage: String, correctMessage: String) {
        self.wrongMessage = wrongMessage
        self.correctMessage = correctMessage
        super.init(frame: .zero)
        configure()
    }
    
    required init?(coder: NSCoder) {
        self.wrongMessage = ""
        self.correctMessage = ""
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        text = "signup"
//        textColor = .clear
        baselineAdjustment = .none
    }
    
    func upateAlert(isValid: Bool) {
        text = isValid ? correctMessage : wrongMessage
        textColor = isValid ? SignUpTextField.CorrectAlertColor : SignUpTextField.WrongAlertColor
    }
}
