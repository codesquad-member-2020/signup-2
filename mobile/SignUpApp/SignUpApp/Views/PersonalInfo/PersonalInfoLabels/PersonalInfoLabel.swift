//
//  PersonalInfoLabel.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class PersonalInfoLabel: UILabel {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        text = "status message"
        textColor = .clear
        baselineAdjustment = .none
    }
    
    func updateStatus(isValid: Bool, message: String) {
        text = message
        textColor = isValid ? .clear : SignUpTextField.UnavailableStatusColor
    }
}
